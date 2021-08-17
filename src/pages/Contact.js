import React, { useState } from 'react';
import Button from '../components/Button';
import Nav from '../components/Nav';
import CopyTOClipboard from 'react-copy-to-clipboard';
import emailjs from 'emailjs-com';


const Contact = () => {

const [nom, setNom] =useState('');
const [societe, setSociete] =useState('');
const [tel, setTel] =useState('');
const [message, setMessage] =useState('');
const [email, setEmail] =useState('');
const [sendSms, setSendSms] = useState(false)

const Result = () =>{
    return(
       <p> Votre message a été bien envoyé merci</p>
    )
}
const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_kryebe7', 'template_0vqrpfe', e.target, 'user_sxdz4Uvhbn5o5CHhtcOGW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSendSms(true);
      e.target.reset()
  }

  setTimeout(() =>{
   setSendSms(false)
  }, 5000)

    return (
        <div className ='contact-g' >
            <Nav/>
                <div className="contact">
                <form action="" onSubmit = { sendEmail} >
                <h1>contact-nous</h1>

                    <label htmlFor="nom">nom</label>
                    <input type="text" id ='nom' name ='nom' onChange = {(e) => setNom(e.target.value)}/> 

                    <label htmlFor="societe">société</label>
                    <input type="text" id ='societe' name ='société' onChange = {(e) => setSociete(e.target.value)} />   


                    <label htmlFor="tel">téléphone</label>
                    <input type="text" id ='tel' name ='téléphone'onChange = {(e) => setTel(e.target.value)} />  

                    <label htmlFor="email">email</label>
                    <input type="text" id ='email' name ='email' onChange = {(e) => setEmail(e.target.value)}/>
 
                    
                    <label htmlFor="sms">Message</label>
                    <input type="text" id ='sms' name ='message' onChange = {(e) => setMessage(e.target.value)}/>

                    <button type ='submit'>envoyer</button> 

                     <div className="sms-send-text">
                      {sendSms? <Result/> : null}
                    </div> 
                </form>
                
                </div>
                
            <Button left ='/projet4'/>
            <div className="adress">
                <div className="adress-content">
                    <div className="tel">
                        <h3>adresse</h3>
                        <p>yopong imme uble koffo</p>
                    </div>
                    <div className="adres">
                        <h3>Téléphone</h3>
                    <CopyTOClipboard text = '01 42 26 90 19'>
                        <p onClick = {() =>alert('copier')} >01 42 26 90 19</p>
                    </CopyTOClipboard>
                    </div>
                    <div className="email">
                        <h3>Email</h3>
                    <CopyTOClipboard text = 'adjeoumar@gmail.com'>
                        <p onClick = {() =>alert('copier')} >adjeoumar@gmail.com</p>
                    </CopyTOClipboard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;