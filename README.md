# 🚀 Portfolio - Saïd KACI | SysOps & Cloud Engineer

Un portfolio SPA (Single Page Application) ultra-professionnel et cyberpunk conçu pour vous permettre de décrocher le stage de l'année et collaborer avec les meilleures agences.

**Style :** Moderne, épuré, avec des touches dynamiques (cyberpunk). Couleurs : noir profond, bleu électrique, vert néon, rouge alarmant.

---

## 📋 Contenu du Portfolio

✅ **Hero Section** - Accroche nucléaire avec glitch effect  
✅ **Projets** - 6 projets clés avec technos et liens  
✅ **Hackathons & CTF** - Timeline de vos réalisations  
✅ **Expérience** - Parcours professionnel détaillé  
✅ **Compétences** - Skills matrix complète avec niveaux  
✅ **Contact** - Formulaire + réseaux sociaux  
✅ **Animations** - Framer Motion pour du smooth  
✅ **Responsive** - Mobile-first design  

---

## 🛠 Stack Technique

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **TypeScript:** Pour plus de robustesse
- **Deployment:** Vercel ou Netlify

---

## 🚀 Installation Locale

### 1. Cloner le projet
```bash
cd ~/portfolio
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## 🎨 Personnalisation

### Modifier le contenu

1. **Hero Section** → `components/HeroSection.tsx`
2. **Projets** → `components/ProjectsSection.tsx`
3. **Expérience** → `components/ExperienceSection.tsx`
4. **Compétences** → `components/SkillsSection.tsx`
5. **Contact** → `components/ContactSection.tsx`

### Changer les couleurs

Modifie `tailwind.config.ts` :
```typescript
colors: {
  'neon-blue': '#0078D4',
  'neon-green': '#39FF14',
  'neon-red': '#FF0000',
  // ...
}
```

### Ajouter tes images

Remplace les emojis par des vraies images dans les sections. Next.js optimise les images automatiquement.

---

## 📦 Build & Déploiement

### Build pour la production
```bash
npm run build
```

### Lancer la version optimisée en local
```bash
npm start
```

---

## 🌐 Déployer sur Vercel (Recommandé)

### Option 1 : Via Git
1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Clique "New Project" → Sélectionne ton repo
4. Configure les variables d'env si besoin
5. Clique "Deploy"
6. BOOM 🎉 Ton portfolio est en ligne !

### Option 2 : Via CLI
```bash
npm install -g vercel
vercel
```

### Ajouter un domaine custom
Dans les paramètres Vercel :
- Ajoute ton domaine (ex: saidkaci.dev)
- Configure les DNS selon les instructions

---

## 🌐 Déployer sur Netlify (Alternative)

1. Va sur [netlify.com](https://netlify.com)
2. Clique "New site from Git"
3. Connecte ton repo GitHub
4. Build command: `npm run build` (Netlify détecte auto Next.js)
5. Deploy ! 🚀

---

## 📧 Intégrer un vrai service d'email

Le formulaire de contact ne sauvegarde actuellement que dans la console. Pour vraiment recevoir les messages :

### EmailJS (Simple & Gratuit)
```bash
npm install @emailjs/browser
```

Puis modifie `components/ContactSection.tsx` :

```typescript
import emailjs from '@emailjs/browser';

// Dans le handleSubmit :
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Ou utilise Formspree (Encore plus simple)
- Va sur [formspree.io](https://formspree.io)
- Crée un formulaire et obtiens l'endpoint
- Remplace l'action du formulaire

---

## 🔧 Variables d'Environnement

Crée un fichier `.env.local` à la root :
```
NEXT_PUBLIC_GITHUB_URL=https://github.com/Said78z
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/saïd-kaci/
NEXT_PUBLIC_EMAIL=said.kaci.pro@gmail.com
```

---

## 📊 SEO & Analytics

### Google Analytics
Installe `next-google-analytics` pour tracker tes visites :
```bash
npm install next-google-analytics
```

### Meta Tags
Tous les meta tags sont configurés dans `app/layout.tsx` pour un bon SEO.

---

## 🎯 Optimisations

✅ Code splitting automatique  
✅ Images optimisées  
✅ CSS minifié  
✅ Lazy loading des composants  
✅ Sitemap auto-généré  

---

## 🚨 Troubleshooting

### Port 3000 déjà utilisé ?
```bash
npm run dev -- -p 3001
```

### Build échoue ?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Animations saccadées sur mobile ?
Réduis la complexité dans `framer-motion` et utilise `prefers-reduced-motion`.

---

## 💡 Tips pour les Recruteurs

1. **Personnalise les projets** - Ajoute tes vrais projets avec des liens GitHub
2. **Mets à jour les dates** - Assure que tout est actuel
3. **Ajoute des captures** - Remplace les emojis par des screenshots
4. **Intègre un CTA fort** - Le bouton "ME RECRUTER" doit être hyper visible
5. **Track les conversions** - Utilise Google Analytics pour voir qui consulte ton portfolio

---

## 📞 Support & Questions

Si tu as besoin d'aide :
- Check la [doc Next.js](https://nextjs.org/docs)
- Check la [doc Tailwind](https://tailwindcss.com/docs)
- Check la [doc Framer Motion](https://www.framer.com/motion/)

---

## 🎉 Tu es Prêt !

Ton portfolio est maintenant **hyper pro**, **ultra rapide**, et **prêt à impressionner les recruteurs les plus exigeants**.

Lance-le, personnalise-le, et montre au monde de quoi tu es capable ! 🚀

---

**Made with ❤️ for ambitious builders**
