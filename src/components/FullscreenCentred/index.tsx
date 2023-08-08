type Props = {
  children: JSX.Element | JSX.Element[];
};

const FullscreenCentred = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default FullscreenCentred;
