const CREDENTIALS = {
  superadmin: 'password123',
  headteacher: 'password123',
  deputyhead: 'password123',
  registrar: 'password123',
  bursar: 'password123',
  hrmanager: 'password123',
  ictmanager: 'password123',
  security: 'password123',
  hod_science: 'password123',
  classteacher: 'password123',
  teacher: 'password123',
  librarian: 'password123',
  nurse: 'password123',
  boarding: 'password123',
  transport: 'password123',
  store: 'password123',
  procurement: 'password123',
  qa: 'password123',
  parent: 'password123',
  student: 'password123',
  auditor: 'password123'
};

const ROLE_MAP = {
  super_admin: 'superadmin',
  head_teacher: 'headteacher',
  deputy_head: 'deputyhead',
  academic_registrar: 'registrar',
  bursar: 'bursar',
  hr_manager: 'hrmanager',
  ict_manager: 'ictmanager',
  security_manager: 'security',
  hod: 'hod_science',
  class_teacher: 'classteacher',
  subject_teacher: 'teacher',
  librarian: 'librarian',
  school_nurse: 'nurse',
  boarding_master: 'boarding',
  transport_manager: 'transport',
  store_manager: 'store',
  procurement_officer: 'procurement',
  qa_officer: 'qa',
  parent: 'parent',
  student: 'student',
  auditor: 'auditor'
};

function login(username, password, role) {
  const expectedUser = ROLE_MAP[role];
  if (!expectedUser || CREDENTIALS[expectedUser] !== password || username !== expectedUser) {
    return false;
  }
  localStorage.setItem('auth_session', JSON.stringify({
    role: role,
    username: username,
    timestamp: Date.now()
  }));
  return true;
}

function getSession() {
  const session = localStorage.getItem('auth_session');
  return session ? JSON.parse(session) : null;
}

function logout() {
  localStorage.removeItem('auth_session');
}
