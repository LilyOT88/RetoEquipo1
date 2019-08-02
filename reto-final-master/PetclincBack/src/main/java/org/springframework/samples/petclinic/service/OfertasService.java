package org.springframework.samples.petclinic.service;

import java.util.List;

import org.springframework.dao.DataAccessException;

public class OfertasService {
	
		List<Ofertas> oferta =new ArrayList<Ofertas>;
		
		public List<Ofertas> getOfertas() throws DataAccessException {
			return Ofertas.getAll();
		}
		
		public void  insertarOferta(oferta ofer) throws DataAccessException {
			Ofertas.add(ofer);
		}

	public void borrarOferta(oferta ofer) throws DataAccessException {
		Ofertas.delete(ofer);
	}
	
	public void actualizarofertas() throws DataAccessException {
		Ofertas.save();
	}


	
}
