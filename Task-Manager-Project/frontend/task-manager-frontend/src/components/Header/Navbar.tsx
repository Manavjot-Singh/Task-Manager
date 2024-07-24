import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tabs, AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';


function Nav() {
    const navigate = useNavigate();
    const { tabValue } = useParams();

    return (
        <Tabs
            defaultValue="Home"
            color="blue"
            variant="pills"
            value={tabValue}
            onChange={(value) => navigate(`/tabs/${value}`)}
        >
            <Tabs.List grow>
                <Link to="/Home">
                    <Tabs.Tab value="Home">Home</Tabs.Tab>
                </Link>
                <Link to="/About">
                    <Tabs.Tab value="About">About</Tabs.Tab>
                </Link>
            </Tabs.List>
        </Tabs>
    );
}

function App() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header className="navbar">
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                
                <Nav />
            </AppShell.Header>

            <AppShell.Navbar p="md">Navbar Content</AppShell.Navbar>

            <AppShell.Main>Main Content</AppShell.Main>
        </AppShell>
    );
}

export default App;
