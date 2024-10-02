
/*
- Container
criar:

max-width:

display: grid;
    grid-template-columns: 256px 1fr; 
    gap: 2rem;
    align-items: flex-start; 

/*


// import React, { useState } from 'react';
// import styles from './AuthForm.module.css';

// export function AuthForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!email || !password) {
//             setError('Both fields are required.');
//             return;
//         }

//         // Simular uma tentativa de login
//         console.log('Email:', email);
//         console.log('Password:', password);

//         // Limpar campos e mensagem de erro
//         setEmail('');
//         setPassword('');
//         setError('');
//     };

//     return (
//         <div className={styles.container}>
//             <form onSubmit={handleSubmit} className={styles.form}>
//                 <h2>Login</h2>
//                 {error && <p className={styles.error}>{error}</p>}
//                 <div className={styles.formGroup}>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className={styles.submitButton}>Login</button>
//             </form>
//         </div>
//     ); */
