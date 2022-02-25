import http from "../http-common";

class ClienteService {
    getClienteByNome(nome) {
        return http.get(`/clientes/${nome}`)
    }

    getClienteByProntuario(prontuario) {
        return http.get(`/clientes/prontuario/${prontuario}`)
    }

    create(data){
        return http.post("/clientes", data);
    }

    update(prontuario, data) {
        return http.put(`/clientes/prontuario/${prontuario}`, data);
    }

    delete(id) {
        return http.delete(`/clientes/${id}`);
    }
}

export default new ClienteService();