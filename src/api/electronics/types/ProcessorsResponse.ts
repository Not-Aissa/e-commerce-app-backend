import MessageResponse from "../../../interfaces/MessageResponse";
import Processor from "../../../models/interfaces/Processor";

type ProcessorsResponse = Processor[] | Processor | MessageResponse;

export default ProcessorsResponse;
