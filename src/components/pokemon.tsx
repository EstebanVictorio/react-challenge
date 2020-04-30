import { FC, ReactElement } from "react";
import { IPokemon } from "./poketypes";


const Pokemon: FC<IPokemon> = ({
  id,
  name,
  sprites,
}): ReactElement => (
  <span>
  <figure>
    <img src={`${sprites.front_default}`}/>
      <div>
      {`#${id} ${name}`}
      </div>
  </figure>
</span>
)

export default Pokemon