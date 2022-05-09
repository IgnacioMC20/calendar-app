import React, { useState } from 'react'
import Modal from 'react-modal';
import moment from 'moment';

import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = moment().minutes(0).seconds(0).add(2, 'hours');

export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
    const [isOpen, setIsOpen] = useState(true)
    const [titleValid, setTitleValid] = useState(true)

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '123',
        start: now.toDate(),
        end: nowPlus1.toDate(),
    })

    const { title, notes, start, end } = formValues;

    const handleInputChange = ({ target }) => {
      setFormValues({
        ...formValues,
        [target.name]: target.value
      })
    }

    const closeModal = () => {
      console.log('closing modal');
    //   setIsOpen(false);
    }

    const handleStartDateChange = (e) => {
        console.log(e);
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }
    
    const handleEndDateChange = (e) => {
        console.log(e);
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => {

        e.preventDefault();
        
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if(momentStart.isSameOrAfter(momentEnd)) {
          return Swal.fire('Error', 'La fecha de inicio debe ser anterior a la fecha de finalización', 'error');
        } 
        if(title.trim().length === 0){
            return setTitleValid(false);
        }else{
            return setTitleValid(true);
        }
    }



  return (


    <Modal isOpen={true} closeTimeoutMS={300} onRequestClose={closeModal} style={customStyles} className='modal' overlayClassName='modal-fondo'>
        <h1> Nuevo evento </h1>
        <form className="container" onSubmit={handleSubmitForm}>

            <div className="form-group my-3">
                <label>Fecha y hora inicio</label>
                <DateTimePicker className="form-control" onChange={handleStartDateChange} value={start}/>
            </div>

            <div className="form-group my-3">
                <label>Fecha y hora fin</label>
                <DateTimePicker className="form-control" onChange={handleEndDateChange} minDate={start} value={end} />
            </div>

            <div className="form-group">
                <label  abel>Titulo y notas</label>
                <input  type="text" className={`form-control ${ titleValid || 'is-invalid'}`} placeholder="Título del evento" name="title"  value={ title } onChange={handleInputChange} autoComplete="off"/>
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea type="text" value={notes} onChange={handleInputChange}  className="form-control" placeholder="Notas" rows="5" name="notes"></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button type="submit" className="btn btn-outline-primary btn-block">
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
    </Modal>
  )
}
