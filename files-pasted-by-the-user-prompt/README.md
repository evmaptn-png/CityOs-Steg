# CITYOS — Smart Energy Command Center

Prototype front-end de supervision Smart Grid, avec données entièrement fictives et commandes simulées. Aucune connexion à STEG, à un SCADA ou à un compteur réel n'est implémentée.

## Démarrer

```powershell
npm install
npm run dev
```

Puis ouvrir l'URL affichée par Vite (habituellement `http://localhost:5173`).

Si l'installation de Node de cette machine est configurée avec un cache global non accessible, le fichier `.npmrc` maintient le cache du projet localement. Sur un environnement Node standard, les commandes ci-dessus suffisent.

## Scripts

- `npm run dev` : serveur de développement
- `npm run check` : vérification TypeScript
- `npm run build` : production dans `dist/`
- `npm run preview` : aperçu de la version de production
- `npm run server` : backend de simulation avec rechargement
- `npm run server:start` : backend de simulation

## Backend de simulation

Le backend écoute sur `http://localhost:4000` et n'appelle aucun équipement, système ou API réel.

- `GET /api/v1/health` : état du service
- `GET /api/v1/state` : état global centralisé et agrégations
- `GET /api/v1/houses`, `GET /api/v1/houses/:id` : actifs simulés
- `GET /api/v1/commands`, `GET /api/v1/alerts` : audit et incidents
- `POST /api/v1/commands` : commande simulée asynchrone
- `POST /api/v1/simulation` : pause, vitesse, scénario et taux d'échec
- `POST /api/v1/simulation/reset` : réinitialisation

Les événements temps réel `state` et `command:update` sont disponibles via Socket.IO.

Exemple de limite de puissance maison :

```json
POST /api/v1/commands
{
  "targetType": "house",
  "targetId": "M-001245",
  "action": "setPowerLimit",
  "value": 3,
  "durationMinutes": 30
}
```

## Organisation

- `src/App.tsx` : vues et navigation de démonstration
- `src/data/mockData.ts` : données simulées
- `src/types/` : modèles TypeScript
- `src/utils/energyCalculations.ts` : calculs import/export/autoconsommation
- `src/styles.css` : design du tableau de bord

L'ancien livrable HTML autonome reste disponible dans `outputs/` comme aperçu hors ligne, mais le projet à modifier et à exécuter est celui à la racine.
