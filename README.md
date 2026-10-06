# Aboke High School Management System

A complete, role-based school management system with 21 different user roles and permissions.

## Features

✅ **21 Role-Based Dashboards**
- Super Administrator
- Head Teacher
- Deputy Head Teacher
- Academic Registrar
- Bursar
- HR Manager
- ICT Manager
- Security Manager
- Head of Department
- Class Teacher
- Subject Teacher
- Librarian
- School Nurse
- Boarding Master
- Transport Manager
- Store Manager
- Procurement Officer
- Quality Assurance Officer
- Parent
- Student
- Auditor

✅ **Each Role Includes**
- Custom dashboard with role-specific stats
- Role-based permissions and rights
- Quick action buttons
- Data tables with role-relevant information
- Consistent, professional UI

## How to Use

### Demo Login
- **Username:** superadmin
- **Password:** password123
- **Role:** Super Administrator

You can login with any role by using the matching username (e.g., `bursar` for Bursar role).

### File Structure
```
aboke-high-school-management/
├── index.html                    # Redirect to login
├── login.html                    # Login page
├── dashboard.html                # Role-based dashboard
├── assets/
│   ├── css/
│   │   └── style.css            # All styles
│   └── js/
│       ├── auth.js              # Authentication logic
│       └── role-data.js         # All role data
└── README.md
```

## Login Credentials

All roles use the default password: `password123`

| Role | Username |
|------|----------|
| Super Administrator | superadmin |
| Head Teacher | headteacher |
| Deputy Head Teacher | deputyhead |
| Academic Registrar | registrar |
| Bursar | bursar |
| HR Manager | hrmanager |
| ICT Manager | ictmanager |
| Security Manager | security |
| Head of Department | hod_science |
| Class Teacher | classteacher |
| Subject Teacher | teacher |
| Librarian | librarian |
| School Nurse | nurse |
| Boarding Master | boarding |
| Transport Manager | transport |
| Store Manager | store |
| Procurement Officer | procurement |
| Quality Assurance Officer | qa |
| Parent | parent |
| Student | student |
| Auditor | auditor |

## How It Works

1. **Login** - Select your role and enter credentials
2. **Authentication** - Credentials are validated against the auth system
3. **Dashboard** - Role-specific dashboard loads with:
   - Custom title and subtitle
   - Stats cards (4 per role)
   - Permissions list
   - Quick action buttons
   - Data tables
4. **Logout** - Clear session and return to login

## Technology

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Storage:** Browser LocalStorage
- **Hosting:** GitHub Pages (static)
- **No Backend Required** - Works entirely client-side

## Customization

### Add a New Role

1. Open `assets/js/role-data.js`
2. Add new role to the `roleData` object:
```javascript
new_role: {
  title: 'New Role Title',
  subtitle: 'Role subtitle',
  color: '#hexcolor',
  stats: [...],
  permissions: [...],
  quickActions: [...],
  tables: [...]
}
```
3. Update `ROLE_MAP` in `assets/js/auth.js`

### Modify Dashboard Content

All content is in `assets/js/role-data.js`. Edit:
- **Stats** - Dashboard numbers
- **Permissions** - Rights and access
- **Quick Actions** - Buttons
- **Tables** - Data rows

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### GitHub Pages
This project works perfectly on GitHub Pages:

1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site is live at `https://username.github.io/repo-name`

### Alternative Hosting
- Vercel
- Netlify
- Any static hosting service

## Security Notes

⚠️ **Demo Only** - This is a frontend demo. For production:
- Use a proper backend (PHP, Node.js, Python)
- Implement secure authentication
- Use HTTPS
- Hash passwords
- Add CSRF protection
- Implement proper session management

## License

Developed for Aboke High School.

## Support

For issues or questions, please contact the ICT Department.
