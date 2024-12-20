<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Picth </title>

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="css/pitch.css">
</head> 

<body>
    <style>
        {
            margin:0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            border: none;
            outline: none;
            scroll-behavior: smooth;
            font-family: 'Poppins', sans-serif;
        }

        :root{
            --bg-color: #561692;
            --second-bg-color: #323946;
            --text-color: #fff;
            --main-color: rgb(0, 221, 255);
        }

        html{
            font-size: 62.5%;
            overflow-x: hidden;
        }

        body{
            background: var(--bg-color);
            color: var(--text-color);
        }

        section{
            min-height: 100vh;
            padding: 10rem 9% 2rem;
        }

        .header{
            position: fixed;
            top:0;
            left: 0;
            width: 100%;
            padding: 2rem 9%;
            background: var(--bg-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
        }

        .header.sticky{
            border-bottom: .1rem solid rgba(0,0,0,.2);
        }

        .logo{
            font-size: 2.5rem;
            color: var(--text-color);
            font-weight: 600;
            cursor: default;
        }

        .navbar a{
            font-size: 1.7rem;
            color: var(--text-color);
            margin-left: 4rem;
        }

        .navbar a:hover,
        .navbar a.active{
            color: var(--main-color);
        }

        #menu-icon
        {
            font-size: 3.6rem;
            color: var(--text-color);
            display: none;
        }

        .pagina{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .pagina-content h3 {
            font-size: 3.2rem;
            font-weight: 700;
        }

        .pagina-content h3:nth-of-type(2){
            margin-bottom: 2rem;
        }

        span{
            color: var(--main-color);
        }

        .pagina-content h1{
            font-size: 5.3rem;
            font-weight: 700;
            line-height: 1.3;
        }

        .pagina-content p{
            font-size: 1.6rem;
            text-align: justify;
        }

        .social-media a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
            background: transparent;
            border: .2rem solid var(--main-color);
            border-radius: 50%;
            font-size: 2rem;
            color: var(--main-color);
            margin: 3rem 1.5rem 3rem 0;
            transition: .5s ease;
        }

        .social-media a:hover{
            background: var(--main-color);
            color: var(--second-bg-color);
            box-shadow: 0 0 1rem var(--main-color);
        }

        .btn{
            display: inline-block;
            padding: 1rem 2.8rem;
            background: var(--main-color);
            border-radius: 4rem;
            box-shadow: 0 0 1rem var(--main-color);
            font-size: 1.6rem;
            color: var(--second-bg-color);
            letter-spacing: .1rem;
            font-weight: 600;
            transition: .5s ease;
        }

        .btn:hover{
            box-shadow: none;
        }

        .pitch {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            background: var(--second-bg-color);
        }

        .heading{
            text-align: center;
            font-size: 4.5rem;
        }

        .pitch-content h2{
            text-align: left;
            line-height: 1.2;
        }

        .pitch-content h3{
            font-size: 2.6rem;
        }

        .pitch-content p{
            font-size: 1.6rem;
            margin: 2rem 0 3rem;
            text-align: justify;
        }

        .texto{
            text-align: center;
            font-size: 4.5rem;
        }

        .projeto-content h2{
            text-align: left;
            line-height: 1.2;
        }

        .projeto-content h3{
            font-size: 2.6rem;
        }

        .projeto-content p{
            font-size: 1.6rem;
            margin: 2rem 0 3rem;
            text-align: justify;
        }

        .contato{
            gap: 2rem;
            background: var(--second-bg-color);
        }

        div.contact{
            display: flex;
            justify-content: center; 
            align-items: center;
            height: 50vh; 
            padding: 15% 15%;
        }

        .contact a{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
            background: transparent;
            border: .2rem solid var(--main-color);
            border-radius: 50%;
            font-size: 2rem;
            color: var(--main-color);
            margin: 10rem 1.5rem 10rem 0;
            transition: .5s ease;
        }

        .contact a:hover{
            background: var(--main-color);
            color: var(--second-bg-color);
            box-shadow: 0 0 1rem var(--main-color);
        }

        .footer{
            display:flex;
            justify-content: space-between;
            align-items:center;
            flex-wrap: wrap;
            padding: 2rem 9%;
            background: var(--bg-color);
        }

        .footer-text{
            font-size: 1.6rem;
        }

        .footer-iconTop a{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: .8rem;
            background: var(--main-color);
            border-radius: .8rem;
            transition: .5s ease;
        }

        .footer-iconTop a:hover{
            box-shadow: 0 0 1rem var(--main-color);
        }

        .footer-iconTop a i{
            font-size: 2.4rem;
            color: var(--bg-color);
        }

        p{
            line-height: 1.5;
        }

        @media (max-width: 1200px){
            html {
                font-size: 55%;
            }
        }

        @media (max-width: 991px){
            .header {
                padding: 2rem 3%;
            }

            section{
                padding:10rem 3% 2rem;
            }

            .footer {
                padding: 2rem 3%;
            }
        }

        @media (max-width: 768px){
            #menu-icon {
                display: block;
            }

            .navbar {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                padding: 1rem 3%;
                background: var(--bg-color);
                border-top: .1rem solid rgba(0,0,0,.2);
                box-shadow: 0 .5rem rgba(0,0,0,.2);
                display: none;
            }

            .navbar.active{
                display: block;
            } 

            .navbar a {
                display: block;
                font-size: 2rem;
                margin: 3rem 0;
            }

            .pagina{
                flex-direction: column;
            }

            .pagina-content h3{
                font-size: 2.6rem;
            }

            .pagina-content h1{
                font-size:  5rem;
            }

            .pitch{
                flex-direction: column-reverse;
            }

            .pitch-content h3{
                font-size: 2.6rem;
            }

            .pitch-content h1{
                font-size:  5rem;
            }
        }

        @media (max-width:450px){
            html {
                font-size: 50%;
            }

            .footer {
                flex-direction: column-reverse;
            }    

            .footer p{
                text-align: center;
                margin-top: 2rem;
            }
        }
    </style>
    
    <header class="header">
        <a href="#" class="logo">Portfólio</a> 
        
        <i class='bx bx-menu' id="menu-icon"></i>
        
        <nav class="navbar">
            <a href="#pitch">Pitch</a>
            <a href="#projeto">Meu Projeto</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <section class="pagina" id="pagina">
        <div class="pagina-content">
            <h3>Olá, quem eu sou?</h3>
            <h1>Meu nome é Fernanda Mattos Vieira</h1>
            <h3>E atualmente estou dedicada aos estudos em <span>programação</span></h3>
            <p> Essa jornada de aprendizado constante me leva a desvendar os desafios do código e transformá-los em soluções inovadoras.
                Estou sempre entusiasmada em aprimorar minhas habilidades e abraçar novos projetos empolgantes no campo da programação</p>
            <div class="social-media">    
                <a href="https://www.linkedin.com/in/fernanda-mattos-vieira-surda-622200153/" class="linkedin"><i class='bx bxl-linkedin'></i></a>
            </div>
        </div>
    </section>

    <section class="pitch" id="pitch">
        <div class="pitch-content">
            <h2>Pitch</h2>
            <h3>Seja bem-vindo ao meu site!</h3>
            <p>Eu sou uma profissional apaixonada por tecnologia e pela capacidade de inovar e transformar ideias em soluções. 
                Minha jornada começou no campo das Relações Internacionais, mas, ao longo do tempo, percebi que a tecnologia 
                era onde minha verdadeira paixão residia. Agora, com um olhar voltado para o desenvolvimento e inovação, 
                busco constantemente aprimorar minhas habilidades e me desafiar a resolver problemas complexos através do código.</p>
        </div>
    </section>
  
    <section class="projeto" id="projeto">
        <div class="projeto-content">
            <h2>Meu Projeto</h2>
            <h3>Portfólio</h3>
            <p>Este é um dos meus projetos em que apliquei os conhecimentos adquiridos em programação. Desenvolvi utilizando tecnologias como HTML, CSS, JavaScript, e outras ferramentas de design e desenvolvimento.</p>
        </div>
    </section>

    <section class="contato" id="contato">
        <div class="contact">
            <a href="mailto:fernanda@example.com"><i class='bx bx-envelope'></i></a>
        </div>
    </section>

    <footer class="footer">
        <p class="footer-text">© 2024 - Todos os direitos reservados</p>
        <div class="footer-iconTop">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter'></i></a>
        </div>
    </footer>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="script.js"></script>
</body>
</html>
