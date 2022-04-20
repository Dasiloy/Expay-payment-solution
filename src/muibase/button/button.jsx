import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function MuiButton({ variant, href, onClick, loadingButton, ...rest }) {
  const router = useRouter();
  if (loadingButton) {
    return <LoadingButton loading={rest.loading} variant={variant} onClick={onClick} {...rest} />;
  }

  if (href) {
    const handleClick = () => {
      onClick && onClick();
      router.push(href);
    };
    return <Button variant={variant} {...rest} onClick={handleClick} />;
  }
  return <Button variant={variant} {...rest} onClick={onClick} />;
}

MuiButton.Group = ButtonGroup;

MuiButton.propTypes = {
  variant: PropTypes.string.isRequired,
  rest: PropTypes.object,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
