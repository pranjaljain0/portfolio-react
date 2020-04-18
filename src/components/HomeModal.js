import React from 'react'
import {Modal} from 'react-bootstrap'

function HomeModal({lgShow,setLgShow,HomeCards}) {
    return (
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {HomeCards.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                HomeCards.value.map((Obj,index)=>{
                    return(
                        <div 
                            style={{
                                background: `linear-gradient(120deg,`+HomeCards.initialColor+`,`+HomeCards.finalColor+`)`
                            }}
                            className="project_list_item">
                            <p>{Obj.title}</p>
                        </div>
                    )
                })
            }
        </Modal.Body>
      </Modal>
    )
}

export default HomeModal
