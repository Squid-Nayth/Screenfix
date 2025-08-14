import instagramLogo from '@assets/images/icones/instagram.png'
import facebookLogo from '@assets/images/icones/facebook.png'
import tiktokLogo from '@assets/images/icones/tik-tok.png'
import youtubeLogo from '@assets/images/icones/youtube.png'

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-200 text-center py-6 mt-12 text-base">
            © 2025 Screenfix. Tous droits réservés.<br/>
            Développé par <a href="https://www.eva-studio.dev/" target="_blank" className="text-blue-400 hover:underline">EVA STUDIO</a><br/>
            <span className="mt-2 flex items-center justify-center gap-4">
                <span className="text-gray-200">Contact : <a href="tel:0622188574" className="hover:underline">06 22 18 85 74</a></span>
                <a href="https://www.instagram.com/screenfix_ivry/" target="_blank" title="Instagram" className="inline-block">
                    <img src={instagramLogo} alt="Instagram" className="w-7 h-7 hover:opacity-80 transition social-anim"/>
                </a>
                <a href="https://www.tiktok.com/@screenfix75" target="_blank" title="TikTok" className="inline-block">
                    <img src={tiktokLogo} alt="TikTok" className="w-7 h-7 hover:opacity-80 transition social-anim"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578196187566" target="_blank" title="Facebook" className="inline-block">
                    <img src={facebookLogo} alt="Facebook" className="w-7 h-7 hover:opacity-80 transition social-anim"/>
                </a>
                <a href="https://youtube.com/@screenfix-y4b?si=ydIahqQmFs62MJfG" target="_blank" title="YouTube" className="inline-block">
                    <img src={youtubeLogo} alt="YouTube" className="w-7 h-7 hover:opacity-80 transition social-anim"/>
                </a>
            </span>
            <span className="block mt-2">
                <a href="/mentions-légales" target='_blank' className="text-gray-300 hover:text-white mr-4">Mentions légales</a>
                <a href="./politique-confidentialite.html" target='_blank' className="text-gray-300 hover:text-white">Politique de confidentialité</a>
            </span>
        </footer>
    );
}

export default Footer