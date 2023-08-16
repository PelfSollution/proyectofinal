import { Button } from '@mantine/core';

export const ProfileButton = ({
  text,
  callback,
  disabled = false,
  isFullWidth = false,
  compact = false,
  type = 'button',
  color = 'green.5',
  variant = 'default',
}: {
  text: string;
  callback: (e: any) => void;
  isFullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  compact?: boolean;
  color?: string;
  variant?:
    | 'outline'
    | 'white'
    | 'light'
    | 'default'
    | 'filled'
    | 'gradient'
    | 'subtle';
}) => (
  <>
    <Button
      styles={{
        root: {
          '&:disabled': {
            backgroundColor: 'transparent',
          },
        },
      }}
      variant={variant}
      color={color}
      fullWidth={isFullWidth}
      disabled={disabled}
      radius="md"
      size="lg"
      type={type}
      compact={compact}
      onClick={callback}
    >
      {text}
    </Button>
  </>
);
