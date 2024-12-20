<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio</title>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            font-family: 'Poppins', sans-serif;
            scroll-behavior: smooth;
        }

        :root {
            --bg-color: #561692;
            --second-bg-color: #323946;
            --text-color: #ffffff;
            --main-color: rgb(0, 221, 255);
        }

        body {
            background: var(--bg-color);
            color: var(--text-color);
        }

        /* Cabeçalho */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1.5rem 9%;
            background: var(--bg-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transition: 0.3s;
        }

        .header.sticky {
            border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
        }

        .logo {
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--text-color);
        }

        .navbar {
            display: flex;
            align-items: center;
        }

        .navbar a {
            font-size: 1.6rem;
            color: var(--text-color);
            margin-left: 2rem;
            transition: color 0.3s;
        }

        .navbar a:hover,
        .navbar a.active {
            color: var(--main-color);
        }

        #menu-icon {
            display: none;
            font-size: 3rem;
            color: var(--text-color);
            cursor: pointer;
        }

        /* Seção principal */
        .pagina {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100vh;
            padding: 10rem 2rem;
        }

        .pagina h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .pagina h1 {
            font-size: 4rem;
            line-height: 1.3;
            margin-bottom: 2rem;
        }

        .pagina span {
            color: var(--main-color);
        }

        .pagina p {
            font-size: 1.5rem;
            max-width: 600px;
            margin: 0 auto 2rem;
        }

        .social-media a {
            font-size: 2rem;
            color: var(--main-color);
            margin: 0 0.5rem;
            transition: 0.3s;
        }

        .social-media a:hover {
            color: var(--text-color);
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 2rem;
            background: var(--second-bg-color);
            color: var(--text-color);
        }

        /* Responsividade */
        @media (max-width: 768px) {
            #menu-icon {
                display: block;
            }

            .navbar {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--bg-color);
                padding: 1rem 0;
            }

            .navbar.active {
                display: flex;
            }

            .navbar a {
                margin: 1rem 0;
            }
        }

        @media (max-width: 450px) {
            .pagina h1 {
                font-size: 3rem;
            }

            .pagina p {
                font-size: 1.4rem;
            }
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <header class="header">
        <a href="#" class="logo">Portfólio</a>
        <i class="bx bx-menu" id="menu-icon"></i>
        <nav class="navbar">
            <a href="#pagina" class="active">Início</a>
            <a href="#projeto">Projeto</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <!-- Página principal -->
    <section class="pagina" id="pagina">
        <div>
            <h3>Olá, quem eu sou?</h3>
            <h1>Meu nome é <span>Fernanda Mattos Vieira</span></h1>
            <h3>E atualmente estou estudando <span>programação</span></h3>
            <p>Estou em uma jornada para aprender, evoluir e criar soluções incríveis por meio do código.</p>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/fernanda-mattos-vieira-surda-622200153/"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    </section>

    <!-- Rodapé -->
    <footer class="footer">
        <p>Desenvolvido por Fernanda Mattos Vieira | 2023</p>
    </footer>

    <script>
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 50);
        });
    </script>
</body>
</html>
