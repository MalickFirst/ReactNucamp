import { Col } from "reactstrap";
import Partners from "./Partners";
import { selectAllPartners } from "./partnersSlice";

const PartnerList = () => {
const partners = selectAllPartners ();

return (
   <Col className="mt-4">
    { partners.map((partner) =>{
        return (
            <div className='d-flex mb-5' key={partner.id}>
                 <Partners partner={partner} />
          </div>
        );
    }) }
   </Col>


)
}

export default PartnerList;