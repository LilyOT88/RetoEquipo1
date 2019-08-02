package org.springframework.samples.petclinic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.repository.OfertasRepository;
import org.springframework.stereotype.Service;
@Service
public class OfertasService {
	@Autowired
	private OfertasRepository repo;
//		List<Oferta> oferta =new ArrayList<Oferta>;
		
		public List<Oferta> getOfertas() throws DataAccessException{
			return repo.findAll();
		}
		
		public void  insertarOferta(Oferta ofer) throws DataAccessException {
			repo.save(ofer);
		}

	public void borrarOferta(Integer id) throws DataAccessException {
		repo.delete(id);
	}
	
	public void updateofertas(Oferta ofer ) throws DataAccessException {
		repo.save(ofer);
	}

}
