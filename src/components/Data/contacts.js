import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const contacts = {
  email: [
    'atharvaumbarkar1@gmail.com',
    'atharvau@iitk.ac.in',
  ],
  phone: [
    '0987654321',
    '1234567890'
  ],
  address: 'H-209, Hall V, IIT Kanpur, Kalyanpur, Kanpur: 208016',
  socials: [
    {
      name: 'Github',
      icon: <GitHub className="social-icon" />,
      link: 'https://github.com/AtharvaUmbarkar',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn className="social-icon" />,
      link: 'https://www.linkedin.com/in/atharva-umbarkar/',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="social-icon" />,
      link: 'https://www.facebook.com/atharva.umbarkar.351',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="social-icon" />,
      link: 'https://www.instagram.com/atum_20/',
    },
  ]
}

export default contacts;