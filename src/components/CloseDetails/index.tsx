type Props = {
  onClick: () => void;
};
export const CloseDetails = ({ onClick }: Props): JSX.Element => {
  return (
    <button className="close" title="close details" onClick={onClick}>
      <span className="close__line"></span>
      <span className="close__line"></span>
    </button>
  );
};
