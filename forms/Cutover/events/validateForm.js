function validateForm(form){
	
	if(form.getValue("tipoDocumento") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("unidade") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("quantidade") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("codMaterial") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("negocio") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("descMaterial") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("centroLogistico") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("organizacaoCompra") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("empresa") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("classificacaoContabil") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("linhaCompra") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("dataRemessa") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("grupoMercadoria") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	if(form.getValue("valorOrcamento") == ""){
		throw "É necessário preencher os campos vazio."
		
	}
	
	
}