import './Form.css';

const options = {
  rabbit: 'パティ',
  bear: 'ボビー',
  fox: 'ダイアナ',
  pig: 'プリプリン',
  squirrel: 'ジュディ',
};

type Props = { selected?: keyof typeof options };

function Form(props: Props) {
  const { selected } = props;

  return (
    <form>
      <div className="form-item">
        <label htmlFor="favChar">好きなキャラクターは？</label>
        <select id="favChar" defaultValue={selected}>
          {Object.entries(options).map(([species, name]) => (
            <option value={species} key={species}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="favReason">そのキャラクターのどこが好き？</label>
        <textarea id="favReason" defaultValue="【例】性格が好き" />
      </div>
    </form>
  );
}

export default Form;
