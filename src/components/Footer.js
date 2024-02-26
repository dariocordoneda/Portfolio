import React from 'react';
import styled  from 'styled-components'
import mail from '../images/mail.png'


const FooterStyled = styled.div`
color: white;
padding: 100px;
box-sizing: border-box;


.footer{
    border-bottom: 2px solid #40c3ff;;
    display: flex;
    align-items: center;
    justify-content: center
}

.footer2{
    
    display: flex;
    align-items: center;
    justify-content: left
}

.footer img{
    width: 70px;
    height: 70px;
}




span{
    color: white;
}

.contacto{
    
    display: grid;
    grid-template-columns: 100px 100px;
    gap:20px;
}
.mail.icon{
    
    display:flex;
    justify-content:center;
    align-items:center;

}
.mail{
    
    display: flex;
    align-items:center;
    justify-content:center;
}

.nick{
    
    display: flex;
    align-items:center;
    justify-content:center;
}
h2{
    letter-spacing: 3px;
    margin-left:300px;
}

.nick h2{
    margin-left:80px;
}
`


export default function Footer(){
    

    return(
        <FooterStyled id="contact">
            <div className="footer">
                <div>
                    <div className="contacto">
                        <div className="mail.icon">
                            <img src={mail} alt=""/>
                        </div>
                        <div className="mail">
                            <h2>Dario_cordoneda@hotmail.com</h2>
                        </div>
                    </div>
                    
                       
                    
                </div>
            </div>

            <div className="footer2">
                &copy; Dario Cordoneda
            </div>
        </FooterStyled>
    )
}