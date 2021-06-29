
var ETAPA_CUTOVER = {
	"INICIO": 2,
	"AVALIACAO": 6,
	"AJUSTAR": 12,
	"APROVADO": 8,
	"FIM": 10	
}

function displayFields(form,customHTML){ 
	
	var etapaFluig = getValue("WKNumState");
	
	form.setVisibleById("atendente", false);
	form.setVisibleById("anotacao", false);
	
	if(etapaFluig == ETAPA_CUTOVER.AVALIACAO){
		form.setVisibleById("atendente", true);
		form.setVisibleById("anotacao", true);
	}
	
	if(etapaFluig == ETAPA_CUTOVER.AJUSTAR){
	   form.setVisibleById("anotacao", true);
	   form.setEnabled("justificacao", false);
	}
	
	if(etapaFluig == ETAPA_CUTOVER.FIM){
		   form.setVisibleById("anotacao", true);
		   form.setEnabled("justificacao", false);
	}
	
	
	
}