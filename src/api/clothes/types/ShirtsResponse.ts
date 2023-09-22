import MessageResponse from "../../../interfaces/MessageResponse";
import Shirt from "../../../models/interfaces/Shirt";

type ShirtsResponse = Shirt[] | Shirt | MessageResponse;

export default ShirtsResponse;
