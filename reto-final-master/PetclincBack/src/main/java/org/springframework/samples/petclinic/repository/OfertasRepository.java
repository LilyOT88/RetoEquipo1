package org.springframework.samples.petclinic.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.petclinic.model.Oferta;

@Repository
public interface OfertasRepository extends JpaRepository<Oferta, Integer> {
	
//	@Query("select o from Oferta o where to_char(:expireDate,'MM/DD/YYYY')>to_char(SYSDATE,'MM/DD/YYYY')")
//    List<Oferta> findByExpireDate(@Param("expireDate")String expireDate);
}
