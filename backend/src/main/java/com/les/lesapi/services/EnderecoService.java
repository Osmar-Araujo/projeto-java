package com.les.lesapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.les.lesapi.models.Endereco;
import com.les.lesapi.repositories.EnderecoRepository;

@Service
public class EnderecoService {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	
	public List<Endereco> findAll(){
		List<Endereco> list = enderecoRepository.findAll();
		return list;
	}
	
	public Endereco save (Endereco endereco) {
		return enderecoRepository.save(endereco);
		
	}
	
	public List<Endereco> findAllByIdUsuario(Integer Id_usuario){
		return enderecoRepository.findAllByIdUsuario(Id_usuario);
	}
	
	
}
