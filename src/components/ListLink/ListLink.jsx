import  { React,useEffect ,useState } from 'react';
import "./ListLink.css";
import { db, fire } from "../../firebase/firebase";

function ListLink() {

    let total = [];
    const [link, setLink] = useState([])
    const [image,setImage] = useState([])
    

    const fetchElement = () => {
        
        db.collection("Link").get()
        .then( querySnapchot => {
            querySnapchot.forEach(docs => {
                total.push(docs.data())
            })
            setLink(total);
        }).catch(err => {
            console.log("error db => ",err)
        })

        // storage getone image
        // const storage = fire.storage("gs://linkweb-a00cb.appspot.com")
        // const storageRef = storage.ref()
        // const imageRef = storageRef.child("dDisney.png").getDownloadURL().then(url => {
        //     console.log(url)
        //     setImage(url)
        // })

        // https://firebasestorage.googleapis.com/v0/b/linkweb-a00cb.appspot.com/o/dDisney.png?alt=media&token=89e9be9f-1187-4f35-9af3-02d2418749e9


        // list storage image
        // const listImageRef = storageRef.child("").listAll()
        // .then(res => {
        //     res.items.forEach(itemRef => {
        //         itemRef.getDownloadURL()
        //         .then(data=>{
        //             console.log('data itemRef get => ',data)
        //             setImage()
        //         })
        //         .catch(err => {
        //             console.log("error itemRef => ", err)
        //         })
        //     })
        // })
        // .catch(err => {
        //     console.log("err list storage => ",err)
        // })
    }

    useEffect(() => {
        fetchElement();
    },[])

    return (
        <>
        <h2 className="title_list">liste des Liens</h2>
        <div className="block_link">
            {
            link.map((linkItem,index) => (
                <div key={ "link_" + index } className="block_link_content">
                    <a className="linkItem"  href={linkItem.lien} target="_blank" >
                        <img className="image_link" src={linkItem.imageUrl}></img>
                    </a>
                    <p>{linkItem.nom}</p>
                </div>
            ))}
        </div>
        
        </>
    )
}

export default ListLink
