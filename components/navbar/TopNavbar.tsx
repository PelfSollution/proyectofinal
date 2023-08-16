import { useRouter } from 'next/router';
import Link from 'next/link';
import { deleteCookie, hasCookie } from 'cookies-next';
import { useEffect, useState, useCallback } from 'react';
import { Header, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}


const TopNavbar = ({ links }: HeaderSimpleProps) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

 
  const logout = useCallback(async () => {
    deleteCookie('username');
    await fetch('/api/auth/logout');
    router.push('/');
  }, [router]);

  const checkLoginStatus = useCallback(() => {
    const hasLoginCookie = hasCookie('isLoggedIn');
    setIsLoggedIn(hasLoginCookie);
  }, []);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  console.log("Is logged in: ", isLoggedIn);
  
  
  return (
    <div>
      <Header height={60}>
        <Link href="/">Home</Link>
        {isLoggedIn && (
          <Button onClick={logout}>Log Out</Button>
        )}
      </Header>
    </div>
  );
};

export default TopNavbar;
