
import Oven from './Oven';
import Sink from './Sink';

function Kitchen() {
  return (
    <div className="kitchen">
      <h2>Kitchen</h2>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;