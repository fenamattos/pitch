<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pitch</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/pitch.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            border: none;
            outline: none;
            scroll-behavior: smooth;
            font-family: 'Poppins', sans-serif;
        }

        :root {
            --bg-color: #561692;
            --second-bg-color: #323946;
            --text-color: #fff;
            --main-color: rgb(0, 221, 255);
        }

        html {
            font-size: 62.5%;
            overflow-x: hidden;
        }

        body {
            background: var(--bg-color);
            color: var(--text-color);
        }

        section {
            min-height: 100vh;
            padding: 10rem 9% 2rem;
        }

        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 2rem 9%;
            background: var(--bg-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
        }

        .header.sticky {
            border-bottom: .1rem solid rgba(0, 0, 0, .2);
        }

        .logo {
            font-size: 2.5rem;
            color: var(--text-color);
            font-weight: 600;
            cursor: default;
        }

        .navbar a {
            font-size: 1.7rem;
            color: var(--text-color);
            margin-left: 4rem;
        }

        .navbar a:hover,
        .navbar a.active {
            color: var(--main-color);
        }

        #menu-icon {
            font-size: 3.6rem;
            color: var(--text-color);
            display: none;
        }

        .pagina {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .pagina-content h3 {
            font-size: 3.2rem;
            font-weight: 700;
        }

        .pagina-content h3:nth-of-type(2) {
            margin-bottom: 2rem;
        }

        span {
            color: var(--main-color);
        }

        .pagina-content h1 {
            font-size: 5.3rem;
            font-weight: 700;
            line-height: 1.3;
        }

        .pagina-content p {
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

        .social-media a:hover {
            background: var(--main-color);
            color: var(--second-bg-color);
            box-shadow: 0 0 1rem var(--main-color);
        }

        .btn {
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

        .btn:hover {
            box-shadow: none;
        }

        .pitch {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            background: var(--second-bg-color);
        }

        .heading {
            text-align: center;
            font-size: 4.5rem;
        }

        .projeto-content p {
            font-size: 1.6rem;
            margin: 2rem 0 3rem;
            text-align: justify;
        }

        @media (max-width: 1200px) {
            html {
                font-size: 55%;
            }
        }

        @media (max-width: 991px) {
            .header {
                padding: 2rem 3%;
            }

            section {
                padding: 10rem 3% 2rem;
            }

            .footer {
                padding: 2rem 3%;
            }
        }

        @media (max-width: 768px) {
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
                border-top: .1rem solid rgba(0, 0, 0, .2);
                display: none;
            }

            .navbar.active {
                display: block;
            }
        }

        @media (max-width: 450px) {
            html {
                font-size: 50%;
            }

            .footer {
                flex-direction: column-reverse;
            }

            .footer p {
                text-align: center;
                margin-top: 2rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="#" class="logo">Portfólio</a>
        <i class="bx bx-menu" id="menu-icon"></i>
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
            <p>Essa jornada de aprendizado constante me leva a desvendar os desafios do código e transformá-los em soluções inovadoras.</p>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/fernanda-mattos-vieira-surda-622200153/"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-text">
            <p>DESENVOLVIDA POR FERNANDA MATTOS VIEIRA | 2023</p>
        </div>
    </footer>
    
</body>
</html>
