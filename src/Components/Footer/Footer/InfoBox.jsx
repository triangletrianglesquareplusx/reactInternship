const InfoBox = ({ value }) => {
  return (
    <div
      className={`font-bold hover:border-b-2 hover:border-b-simpleWhite  p-5 m-3`}
    >
      <p>{value}</p>
    </div>
  );
};

export default InfoBox;
