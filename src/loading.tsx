import RotateLoader from 'react-spinners/RotateLoader';

export default function Loading() {
  return (
    <RotateLoader
      loading
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
}
