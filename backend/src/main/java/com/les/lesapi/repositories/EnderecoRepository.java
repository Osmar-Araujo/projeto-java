package com.les.lesapi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.les.lesapi.models.Endereco;

@Repository
public interface EnderecoRepository  extends JpaRepository<Endereco, Integer>{
	
	@Query(value="Select e from Endereco e where e.usuario.id = id_usuario")
	public List<Endereco> findAllByIdUsuario(Integer id_usuario);
}
