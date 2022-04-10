package com.les.apiv2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.les.apiv2.entities.Cartao;

@Repository
public interface CartaoRepository extends JpaRepository<Cartao, Integer>{

	@Query(value="Select c from Cartao c where c.usuario.id = id_usuario")
	public List<Cartao> findAllByIdUsuario(Integer id_usuario);

}
