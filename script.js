document.addEventListener("DOMContentLoaded", function () {
    // 1. Elementos de Navegación
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const btnIrArriba = document.getElementById('btn-ir-arriba');

    // Manejo del menú hamburguesa
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
        });
    }

    // Manejo del submenú desplegable
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });
    }

    // Cerrar desplegables al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (menu && menu.classList.contains('active') && !menu.contains(e.target) && e.target !== menuToggle) {
            menu.classList.remove('active');
        }
        if (dropdownMenu && dropdownMenu.classList.contains('active') && !dropdownMenu.contains(e.target) && e.target !== dropdownToggle) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Desplazamiento suave para todos los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    if (menu) menu.classList.remove('active');
                    if (dropdownMenu) dropdownMenu.classList.remove('active');
                }
            }
        });
    });

    // 2. Lógica de Modales
    const modalSS = document.getElementById('modal-servicio-social');
    const btnSS = document.getElementById('btn-servicio-social');
    const btnCerrarSS = document.getElementById('cerrar-modal-ss');
    const btnEntendidoSS = document.getElementById('btn-entendido-ss');

    if (btnSS && modalSS) {
        btnSS.addEventListener('click', (e) => {
            e.preventDefault();
            if (dropdownMenu) dropdownMenu.classList.remove('active');
            modalSS.classList.add('active');
        });
    }

    const cerrarModalSS = () => {
        if (modalSS) modalSS.classList.remove('active');
    };

    if (btnCerrarSS) btnCerrarSS.addEventListener('click', cerrarModalSS);
    if (btnEntendidoSS) btnEntendidoSS.addEventListener('click', cerrarModalSS);

    if (modalSS) {
        modalSS.addEventListener('click', (e) => {
            if (e.target === modalSS) cerrarModalSS();
        });
    }

    // 3. Mascota Oficial desde el Submenú
    const btnMascota = document.getElementById('btn-mascota-tramite');
    const seccionMascota = document.getElementById('mascota');

    if (btnMascota && seccionMascota) {
        btnMascota.addEventListener('click', (e) => {
            e.preventDefault();
            if (dropdownMenu) dropdownMenu.classList.remove('active');
            seccionMascota.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 4. Visor de Imágenes (Modal Visor)
    const modalVisor = document.getElementById('modal-visor');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    const btnCerrarVisor = document.getElementById('cerrar-modal');
    const imagenesPosteres = document.querySelectorAll('.imagen-poster');

    imagenesPosteres.forEach(img => {
        img.addEventListener('click', () => {
            if (modalVisor && imagenAmpliada) {
                imagenAmpliada.src = img.src;
                imagenAmpliada.alt = img.alt;
                modalVisor.classList.add('active');
            }
        });
    });

    if (btnCerrarVisor) {
        btnCerrarVisor.addEventListener('click', () => modalVisor.classList.remove('active'));
    }
    if (modalVisor) {
        modalVisor.addEventListener('click', (e) => {
            if (e.target === modalVisor) modalVisor.classList.remove('active');
        });
    }

    // 5. Botón Ir Arriba
    if (btnIrArriba) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                btnIrArriba.classList.add('visible');
            } else {
                btnIrArriba.classList.remove('visible');
            }
        });
    }

    // 6. Protección contra Arrastre y Clic Derecho en Imágenes
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });
    document.addEventListener('contextmenu', (e) => e.preventDefault());
});
// Manejo del Modal de Inicio
const modalInicio = document.getElementById('modal-inicio');
const btnCerrarInicio = document.getElementById('cerrar-modal-inicio');
const btnEntendidoInicio = document.getElementById('btn-entendido-inicio');
const btnInicioMenu = document.querySelector('.btn-inicio-modal');

// Función para cerrar modal
const cerrarInicio = () => {
    if (modalInicio) modalInicio.classList.remove('active');
};

// Eventos de cierre
if (btnCerrarInicio) btnCerrarInicio.addEventListener('click', cerrarInicio);
if (btnEntendidoInicio) btnEntendidoInicio.addEventListener('click', cerrarInicio);

if (modalInicio) {
    modalInicio.addEventListener('click', (e) => {
        if (e.target === modalInicio) cerrarInicio();
    });
}

// Reabrir modal si se presiona el botón "Inicio" del menú
if (btnInicioMenu && modalInicio) {
    btnInicioMenu.addEventListener('click', (e) => {
        e.preventDefault();
        modalInicio.classList.add('active');
    });
}
// Abrir modal de servicio social desde el botón de la sección de trámites
const btnAbrirSSModal = document.getElementById('btn-abrir-ss-modal');
if (btnAbrirSSModal && modalSS) {
    btnAbrirSSModal.addEventListener('click', (e) => {
        e.preventDefault();
        modalSS.classList.add('active');
    });
}