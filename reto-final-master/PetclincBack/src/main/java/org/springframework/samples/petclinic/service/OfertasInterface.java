package org.springframework.samples.petclinic.service;

import java.util.List;

import org.springframework.samples.petclinic.model.Oferta;

public interface OfertasInterface {
public List<Oferta> getOfertas();
public void insertarOferta(Oferta ofer);
public boolean borrarOferta(Integer id);
public void updateOferta(Oferta ofer);
public Oferta obtenerOferta(Integer id);

}
