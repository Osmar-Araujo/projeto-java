package com.les.apiv2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.les.apiv2.entities.Endereco;
import com.les.apiv2.repository.EnderecoRepository;

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