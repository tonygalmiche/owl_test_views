# -*- coding: utf-8 -*-
from odoo import models,fields
from datetime import datetime, date, timedelta


class project_task(models.Model):
    _inherit = "project.task"

    def get_dhtmlx(self, domain=[]):
        tasks=self.env['project.task'].search(domain, limit=100)

        #** Ajout des projets *************************************************
        res=[]
        projects=[]
        for task in tasks:
            if task.project_id not in projects:
                projects.append(task.project_id)
        for project in projects:
            vals={
                "id": project.id+100000,
                "text": "PROJET : %s"%project.name,
                "start_date": False,
                "duration": False,
                "parent": 0,
                "progress": 0,
                "open": True,
                "assigned": project.user_id.name,
                "priority": 2,
            }
            res.append(vals)
        #**********************************************************************

        #** Ajout des taches **************************************************
        for task in tasks:
            vals={
                "id": task.id,
                "text": task.name,
                "end_date": task.date_deadline or datetime.now(),
                "duration": task.planned_hours or 8,
                "parent": task.project_id.id+100000,
                "assigned": task.user_id.name,
                "progress": task.progress/100,
                "priority": int(task.priority),
            }
            res.append(vals)
        #**********************************************************************


        #** Ajout des dependances *********************************************
        links=[]
        ct=1
        for task in tasks:
            if len(task.dependency_task_ids):
                print("dependency_task_ids = ",task.dependency_task_ids)
                for dependency in task.dependency_task_ids:
                    vals={
                        "id":ct,
                        "source": dependency.id,
                        "target": task.id,
                        "type":0,
                    }
                    links.append(vals)
                    ct+=1
        #**********************************************************************



            # //     links: [
            # //         { id:1, source:1, target:2, type:"1" },
            # //         { id:2, source:2, target:3, type:"0" }
            # //     ]



        return {"items":res, "links": links}

#    ids, args = args[0], args[1:]


        #     filtre=[('purchase_ok', '=', True)]
        #     if obj.stock_category_id:
        #         filtre.append(('is_stock_category_id', '=', obj.stock_category_id.id))
        #     if obj.product_id:
        #        filtre.append(('id', '=', obj.product_id.id))
        #     products=self.env['product.product'].search(filtre)
        # ids += list(self._search(search_domain + args, limit=limit))
