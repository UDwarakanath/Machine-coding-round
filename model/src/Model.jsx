const Model = ({setOpenModel}) => {
      return (
            <div className="model-container">
                 <dic className="container">
                 <header>
                        <h6>Are Your sure</h6>
                        <span className="closeBtn" onClick={()=>setOpenModel(false)}>X</span>
                  </header>
                  <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae delectus dolorum veritatis quaerat. Unde
                        nobis magnam nesciunt molestiae ex pariatur perferendis
                        iste dolores labore reiciendis.
                  </p>
                 </dic>
            </div>
      );
};

export default Model;
