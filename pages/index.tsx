import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { Paper } from '@mantine/core';
import { ProfileButton } from '../components/common/Buttons';


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Si hay una cookie con el nombre "username", asumimos que el usuario ha iniciado sesión
  useEffect(() => {
    const usernameCookie = getCookie('username');
    if (usernameCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const router = useRouter();

  // Función para establecer una cookie ficticia y simular que un usuario ha iniciado sesión
  const simulateLogin = () => {
    setCookie('username', 'JohnDoe');
    setIsLoggedIn(true);  // Actualizamos el estado para reflejar el cambio
  };

  return (
    <div >
      <Paper>
        <p>Lorem ipsum</p>

        {isLoggedIn ? (
          <ProfileButton
            text="Hola, John Doe"
            callback={() => router.push('/albums')}
          />
        ) : (
          <>
            <ProfileButton
              text="Log In"
              callback={() => router.push('/api/auth/authorize')}
            />
            {/* Botón para simular el inicio de sesión (sólo para desarrollo) */}
            <button onClick={simulateLogin}>Simular inicio de sesión</button>
          </>
        )}
      </Paper>
    </div>
  );
}
