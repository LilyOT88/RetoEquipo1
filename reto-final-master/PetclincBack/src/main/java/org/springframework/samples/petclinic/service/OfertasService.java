package org.springframework.samples.petclinic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.repository.OfertasRepository;
import org.springframework.stereotype.Service;
@Service
public class OfertasService implements OfertasInterface{
	@Autowired
	private OfertasRepository repo;


	@Override
	public List<Oferta> getOfertas() throws DataAccessException {
		return repo.findAll();
		
	}

	@Override
	public void insertarOferta(Oferta ofer) throws DataAccessException {
		repo.save(ofer);
		
	}

	@Override
	public boolean borrarOferta(Integer id)  throws DataAccessException{
		if (repo.findOne(id)!=null) {
		repo.delete(id);
		return true;
	}
		return false;
		
		
	}

	@Override
	public void updateOferta(Oferta ofer) throws DataAccessException {
		repo.save(ofer);
		
	}

	@Override
	public Oferta obtenerOferta(Integer id) throws DataAccessException {
		return repo.findOne(id);
	}
	

	
	
}
