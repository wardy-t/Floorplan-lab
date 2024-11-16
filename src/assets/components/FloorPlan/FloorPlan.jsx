
import Kitchen from './Kitchen/Kitchen';
import LivingRoom from './LivingRoom/LivingRoom';
import Bedroom from './Bedroom/Bedroom';
import Bath from './Bath/Bath';

function FloorPlan() {
  return (
    <div className="floor-plan">
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size="Full" />
      <LivingRoom />
      <Bedroom bedNum={2} />
      <Bath size="Half" />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan;