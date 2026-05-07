 <script>
        // Control de Audio y Splash Screen
        let isMusicPlaying = false;
        const audio = document.getElementById('bg-music');
        const btnToggle = document.getElementById('btn-music-toggle');

        function ingresar(conMusica) {
            const splash = document.getElementById('splash-screen');
            
            if (conMusica) {
                audio.play().catch(e => console.log("Bloqueado por navegador", e));
                isMusicPlaying = true;
                btnToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
            } else {
                btnToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            }
            
            btnToggle.classList.remove('hidden'); 
            
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                document.body.classList.remove('modal-open');
            }, 700);
        }

        function toggleMusic() {
            if (isMusicPlaying) {
                audio.pause();
                btnToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            } else {
                audio.play();
                btnToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
            }
            isMusicPlaying = !isMusicPlaying;
        }

        // Lógica del Contador
        document.addEventListener('DOMContentLoaded', () => {
            const fechaEvento = new Date(2026, 4, 16, 10, 30).getTime();
            
            const actualizarContador = () => {
                const ahora = new Date().getTime();
                const distancia = fechaEvento - ahora;

                if (distancia < 0) return;

                const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

                document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
                document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
                document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
                document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
            };

            actualizarContador();
            setInterval(actualizarContador, 1000);
        });

        // Función de Agendar
        function agendarEvento(e) {
            e.preventDefault();
            const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mis+15+Años+-+Karol&dates=20260516T153000Z/20260516T230000Z&location=Pore,+Casanare';
            window.open(url, '_blank');
        }

        // Cierre de modales
        document.querySelectorAll('dialog').forEach(dialog => {
            dialog.addEventListener('click', (e) => {
                const rect = dialog.getBoundingClientRect();
                if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
                    dialog.close();
                }
            })
        });
    </script>