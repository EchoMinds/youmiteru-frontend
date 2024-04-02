import { BASE_API_URL } from "@/constants/api";
import axios from "axios";
import { DataProvider } from "react-admin";

class AdminDataProvider implements DataProvider {
    getList(resource: string): Promise<any> {
        return axios
            .get(`${BASE_API_URL}/admin/${resource}`)
            .then((response) => {
                console.log(response);
                return {
                    data: response.data,
                    total: parseInt(response.headers["x-total-count"], 10),
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getOne(resource: string, id: number) {
        console.log(id);
        return axios
            .get(`${BASE_API_URL}/admin/${resource}/${id.id}`)
            .then((response) => {
                console.log(response);
                return {
                    data: {
                        id: response.titleId,
                        name: response.titleName,
                        image: response.titleImage,
                        description: response.titleDescription,
                        genre: response.genreName,
                    },
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getMany(): Promise<any> {}

    getManyReference(): Promise<any> {}

    create(): Promise<any> {}

    update(): Promise<any> {}

    updateMany(): Promise<any> {}

    delete(): Promise<any> {}

    deleteMany(): Promise<any> {}
}

const dataProvider = new AdminDataProvider();
export default dataProvider;
