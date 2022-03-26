import React from 'react';
import { GitPullRequest, AlertCircle, Messages, FileInfo } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
  {},
];

interface MainLinksProps {
  saves: Array<convert.Element | undefined>;
  children?: React.ReactNode;
}

export function MainLinks({ saves, children }: MainLinksProps) {
  const links = saves.map((link) => {
    let mainLinkProps = { icon: <FileInfo size={16} />, color: 'grape', label: link.name }
    return (
      <MainLink {...link} key={link.label} />
    );
  });
  return <div>{links}</div>;
}
