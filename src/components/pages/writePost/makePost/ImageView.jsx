import * as S from './style';
import cancel from '../../../../assets/image/cancel.png';

const ImageView = ({ image, setFile, data }) => {
  const delImg = () => {
    setFile(data.filter((data) => data.id !== image.id));
    console.table(data);
  };

  return (
    <div style={{ position: 'relative' }}>
      <S.CancelBtn src={cancel} alt="close button" onClick={delImg} />
      <S.PreviewImage src={image.image} alt="img view" />
    </div>
  );
};

export default ImageView;
