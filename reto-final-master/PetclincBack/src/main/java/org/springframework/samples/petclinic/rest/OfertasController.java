package org.springframework.samples.petclinic.rest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.samples.petclinic.service.OfertasService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/ofertas")
public class OfertasController {
	
	@Autowired
	private OfertasService ofertasService;
	
	@RequestMapping(value="", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Collection<Oferta>> getAllOfertas(){
		System.out.println("Estoy enviando ofertas");
		List<Oferta> ofertas=this.ofertasService.getOfertas();
		System.out.println(ofertas);
		if(ofertas.isEmpty()) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
			
		}else {
			
			return new ResponseEntity<Collection<Oferta>>(ofertas, HttpStatus.OK);
			
		}
		
	}
	
	@RequestMapping(value="/{ofertasid}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Oferta> getOfertas(@PathVariable("ofertasid") int offerid){
		
		Oferta oferta=this.ofertasService.obtenerOferta(offerid);
		if(oferta==null) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
			
		}else {
			
			return ResponseEntity.status(HttpStatus.OK).body(oferta);
			
		}
		
	}
	
	@RequestMapping(value="", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> insertOferta(@RequestBody Oferta offer){
		
		if(offer==null) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
			
		}else {
			
			this.ofertasService.insertarOferta(offer);
			return new ResponseEntity<Void>(HttpStatus.OK);
			
		}
		
	}
	
	@RequestMapping(value="/{ofertaid}", method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Void> updateOfertas(@PathVariable Oferta offer) {
		
		if(offer==null) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
			
		}else {
			
			this.ofertasService.updateOferta(offer);
			return new ResponseEntity<Void>(HttpStatus.OK);
			
		}
		
	}
	
	@RequestMapping(value="/{ofertasid}")
	public ResponseEntity<Void> deleteOferta(@PathVariable Integer offerid){
		
		if(offerid==null) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);

		}else {
			
			this.ofertasService.borrarOferta(offerid);
			return new ResponseEntity<Void>(HttpStatus.OK);
			
		}
		
	}

}
