import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import {
	faMobileAlt,
	faEnvelope,
	faPhone
} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faMobileAlt, faEnvelope, faPhone, faFacebook, faInstagram)
